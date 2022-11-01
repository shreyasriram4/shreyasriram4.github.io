---
layout: post
title: "Data Science and DNA"
author: "Shreya Sriram"
categories: journal
tags: [documentation,sample]
image: dna.png
---

Did you know that humans share about 60% of our DNA with bananas? This was by far my favourite takeaway from a class I took in university on data science in genomics. As part of the class, my team worked on predicting m6A modifications on human cancer cell lines. Namely - liver, bone marrow, colon, lung and breast cancer cell lines. Our model was built against a massive dataset (props to anyone in bioinformatics - really an intimidating amount of data) of long read RNA sequences consisting of transcripts from a colon cancer cell line.

Heads up: I'm by no means an expert in biology or DNA (this was my first exposure to it in almost a decade) so let me know if I've got any facts mixed up!

Our training dataset had a huge imbalance, with only 4% of entries labelled positive for having m6A modifications. This means that accuracy would be an awful metric in identifying our model's performance - since our real goal is to correctly identify the minority class.

![Alt Text](/assets/img/label_ratio.png)

As such, we prioritised the PR-AUC (Area Under Curve of the Precision-Recall Curve) and ROC-AUC as our performance metrics.

With a massive array of reads, we performed feature engineering to retrieve features associated with the reads, as well as in one-hot encoding nucleotide base sequences. Also considering the fact that different positions within transcripts had varying number of reads, we accounted for the total number of reads in each given position of a specific transcript.

In building more features, we ended up with a whopping 40 features - not all of which were likely informative. And so, we performed feature selection.

## Recursive Feature Elimination

Recursive feature elimination progressively reduces model complexity, by removing features one by one until the model is optimised. In this case, we used an Extreme Gradient Boosting (XGBoost) model that used its in-built feature importance metric to quantify improvements in model performance.

We tried this out on a variety of numbers of features, ranging from 20 (retaining 51% of features) to 39 (retaining all features).

![Alt Text](/assets/img/rfe-num-features.png)

The model's performance over both metrics was optimised when 25 features were used. Certain features related to nucleotide sequences at specific positions and dwelling time were dropped. We were careful about preventing any data leakage across gene IDs - having overlapping genes in our training and test set will cause information not present in our explicit features in our training set to inevitably spill over into our test set. Hence, we manually implemented cross validation to distinctly split genes across folds.

## Hyperparameter Tuning

We picked key hyperparameters of the XGBoost model for tuning: max_depth, n_estimators, eta, and scale_pos_weight. Our guess was that scale_pos_weight would be the most important parameter, since it decides the extent of weight placed on the minority class. We expected this to mean that our precision and recall would fluctuate wildly in accordance to minute changes in its value. On the contrary, max_depth ended up being our most impactful hyperparameter.

![Alt Text](/assets/img/max_depth.png)

Apparently, increasing the depth of the tree gradually decreases the recall performance on test folds - perhaps because larger trees lead to greater overfitting, and a smaller proportion of the test data being identified as m6A positive? This would make sense, because the precision increases correspondibly. We still don't know for sure though, and if you have any ideas please share them with me!

## Model Performance

After selecting features and tuning our model, we were ready with our final model. 

![Alt Text](/assets/img/final.png)

Our model achieved a ROC-AUC of over 90%, and a PR-AUC of almost 0.5. While that PR-AUC may not sound ideal, this was a huge improvement over our baseline Logistic Regression model, whose PR-AUC was just over 0.3.

![Alt Text](/assets/img/cm-final.png)

Our confusion matrix suggests that while this model does decently, it still has a long way to go in terms of identifying those last 442 m6A modification points.

## Making Predictions on New Cancer Cell Lines

A model's individual performance means nothing if it can't be made actionable. Upon testing our model on the aforementioned 5 cell lines, we realised that all cell lines had nearly identical proportions of m6A modification points, as prescribed by our model. This was interesting considering the fact that they'd been taken from different tissues. Our model identified the highest proportion of m6A modification points in Hct116, which was conveniently also our training cell line. 

![Alt Text](/assets/img/piechart.png)

This could suggest that our model may need more training data across different tissues to extrapolate better to new tissues, and maybe even new species. This finding was reinforced by the scatter plot as follows.

![Alt Text](/assets/img/corr_overlap.png)

With a correlation of 0.55 (excluding that one outlying point of K562 - the bone marrow cell line), there's a notable positive correlation between the number of distinct overlapping transcripts that the newly predicted dataset has with the training Hct116 dataset, and the rate of m6A modifications predicted. Perhaps, in future, larger variety of tissues for training would make a huge difference in preparing the model to extrapolate across tissues.

That's all folks! Thanks for reading all the way and feel free to share any thoughts down below :)
