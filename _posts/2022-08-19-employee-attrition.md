---
layout: post
title: "Modelling Employee Attrition"
author: "Shreya Sriram"
categories: journal
tags: [documentation,sample]
image: employees.png
---

Employee attrition is a major issue faced by companies all over the world. These days, employees can leave companies just as quickly, if not even quicker, than the pace at which they join them! In this project, I aim to take on the perspective of a firm itself. My goal: How can I minimise employee attrition within my firm?

I examine the renowned <a href="https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset">IBM Employee Attrition dataset</a>  to find characteristics that influence employees' decision to leave their firm. In addition, I develop a model to predict if a given employee will quit based on a range of criteria such as overtime status, age, and so on. This project is part of my undergraduate coursework, titled "DSA3101: Data Science in Practice."

## Exploratory Data Analysis

As part of my exploration, I looked into whether exploratory variables had any correlation amongst eachother. This started with a correlation plot of numerical variables, using Pearson’s Correlation coefficient. Exploratory variables with correlation > 0.75 were decidedly omitted when within reason. For instance, YearsInCurrentRole, YearsAtCompany, and YearsWithCurrentManager reasonably contained similar information - and their high correlations evinced this! As a result, I removed all except YearsInCurrentRole, which held the highest correlation amongst the three with our target variable - Attrition rate.

![Alt Text](/assets/img/pearsoncorr.png)

Likewise, I looked into a Cramer V Correlation plot with the numerous categorical variables. Only 2 categorical variables - Department and JobRole are highly correlated, at a whopping 0.94. I dropped JobRole, as Department provides a broader category of information on employees.

Note: For those variables where the p-value of their correlation > 0.05, I deemed their correlation to be insignificant, and imputed their correlation values to 0. That’s why many correlations are set at 0 here, when in reality, their values were probably above 0 but fairly negligible.

![Alt Text](/assets/img/cramerv.png)

If you're interested, you can check out this <a href="https://public.tableau.com/views/EDAonImportantFactorsofAttrition/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link">Tableau dashboard</a> I built while exploring data.

## Modelling

Here comes the exciting part - modelling! The importance of different features to attrition is also highly dependent on the model we choose to employ in predicting attrition. Before modelling, I thought it’d be important to know what I really wanted from my model. Essentially, what were my metrics for success? 

Right off the bat, I knew that accuracy is not the metric to look at, primarily because of the imbalance in the dataset. A whopping minority of 1 in 6 entries in our training dataset encompassed a positive attrition status. As a result, a high accuracy may not be an indication that the model is performing well - the model may just gravitate strongly towards assigning negative attrition status. This poses high risks of Type 2 Error.

<img src="/assets/img/imbalance.png" alt="imbalance" width="400" class="center"/>

I chose to prioritise Recall over metrics like accuracy, because of the importance of pointedly identifying cases of attrition (AttritionStatus = 1). A couple of False Positives (also known as Type 1 error) would be alright, just so long as I succeed in identifying those individuals who are likely to quit. However, too high a Type 1 Error would not be ideal either, which is why I also looked into Precision.

### Managing Imbalance & Building a Model

We used the Random Oversampling approach - which, as the name suggests, randomly oversamples the minority class in a bootstrapped fashion - to deal with the imbalance in our dataset.
					
After playing around with all sorts of models, (from K-Nearest Neighbours to Extreme Gradient Boosting Trees), I ended up landing on one of the simplest models out there: a Logistic Regression model.

This was for two very simple reasons:
  1. Logistic regression outperformed most models on recall
  2. Logistic regression models are highly explainable. In a project where the predominant goal is drawing inferences about the relationships between variables, this proved to be the most meaningful.

### Model Performance

<img src="/assets/img/lr_cm.png" alt="cm" class="center"/>

Following hyperparameter tuning, the logistic regression model yielded a recall of 86%, in which it correctly identified 42 out of 49 cases of attrition. Its precision certainly could have been higher, yielding a mere 40%, which means that 6 in 10 cases of attrition were wrongly identified. However - better safe than sorry! Since recall was our priority, this model was satisfactory.

We’re far from done though. After building our model, it was time to identify features significant to attrition.

### Model Inference

![Alt Text](/assets/img/oddsratio.png)

The odds ratio, which can be derived from the logistic regression model, tells an explicit story on the importance of certain variables to the likelihood of one leaving the company. We found that working overtime played the most significant role - and by a huge margin. Following that were frequent business travel, and (interestingly) being single.

### Parting Thoughts

And there we have it! This was my first end-to-end data science project where I was exposed to the intricacies of deriving insights far beyond modelling. Looking back, I would have looked further into evolving metrics like PR-AUC which strike a balance between Precision and Recall, just so I'd be able to find a meaningful tradeoff between the two. Feel free to share any other thoughts & areas for improvement :)

Till next time!
