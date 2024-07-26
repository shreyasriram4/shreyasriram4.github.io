import pythonIcon from '../images/python.png';
import pytorchIcon from '../images/pytorch.png';
import jsIcon from '../images/javascript.png';
import gitIcon from '../images/git.png';
import apacheSparkIcon from '../images/spark.png';
import dockerIcon from '../images/docker.png';
import reactIcon from '../images/react.png';
import awsIcon from '../images/aws.png';
import logo from '../images/logo.png';
import workplaceImg from '../images/workplace.jpg'
import dnaImg from '../images/dna.jpg'
import minitorchImg from '../images/minitorch.png'
import customerImg from '../images/customer.jpg'
import birdImg from '../images/bird.jpg'
import foodImg from '../images/food.jpg'

const INFO = {
	main: {
		title: "Reactfolio by truethari",
		name: "Tharindu N.",
		email: "mailto:shreyasriram4@gmail.com",
		logo: logo,
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Shreya Sriram",
		description:
			"Hi there! I'm a Cornell Master's student with a love for all things data. I'm excited about using data to unlock insights and empower change in all sorts of industries. I have a strong track record in Data Science, Machine Learning, Data Visualization, and Software Engineering. I am always looking for new opportunities to learn and grow, so feel free to reach out!",
	},

	about: {
		title: "About Me",
		description:
			`Hi there! I'm Shreya, and I'm a Master's student at Cornell University pursuing Computer & Information Sciences. Before that, I did my undergraduate degree in Data Science & Analytics at the National University of Singapore. I'm passionate about using data to unlock insights and empower change everywhere.
			
			With 2 years of internship experience in Data Science, my time spent tinkering with data spans fields like healthcare, manufacturing, real estate and government. During these experiences, I've enjoyed building all sorts of predictive and prescriptive technologies - whether in the form of dashboards, Python tools, or web applications - that have garnered huge business insights and enhanced major operational efficiencies.
			
			I'm also currently involved in exciting research at Cornell on harnessing open source NYC data to study fascinating urban and social phenomena, namely gentrification and lobbying.
			
			I'm always looking for new opportunities to learn and grow, and am actively working on my skills in Data Engineering, Generative AI & Full-Stack Development. Feel free to reach out, I'm happy to connect!`,
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Food Reviews Web Application",
			description:
				"Built a full-stack web application that allows users to search for restaurants, view reviews, and leave their own reviews. It is also configured to handle authentication, persist data and perform analytics. The app is built using React, Next.js, Express, and deployed using Firebase.",
			logos: [jsIcon, reactIcon, gitIcon],
			img: foodImg,
			linkText: "View Project",
			link: "https://github.com/shreyasriram4/foodreviews-react",
		},

		{
			title: "Bird Sightings & Climate Change in North America",
			description:
				"Performed time series analysis on bird sightings data in North America to study the impact of climate change on bird migration patterns. The project involved data engineering, data cleaning, feature engineering, and model building using Python.",
			logos: [pythonIcon, apacheSparkIcon, gitIcon],
			img: birdImg,
			linkText: "View Project",
			link: "https://drive.google.com/file/d/1AG72zCGZwZ22v-rgKv72LwgUmEPJPds6/view?usp=sharing",
		},

		{
			title: "Customer Feedback Analysis Tool",
			description:
				"Built & hosted a tool that leverages transformer architectures to perform topic modelling & sentiment analysis. It is complete with an interactive & customisable dashboard to examine trends in customers' sentiments & topics over time.",
			logos: [pythonIcon, awsIcon, dockerIcon, pytorchIcon, gitIcon],
			img: customerImg,
			linkText: "View Project",
			link: "https://github.com/shreyasriram4/h2o2.ai",
		},

		{
			title: "MiniTorch: A modified implementation of PyTorch",
			description:
				"A manual implementation of a fully-functional deep learning library similar to PyTorch. The project involved building a computational graph, implementing backpropagation, and creating a neural network library from scratch.",
			logos: [pythonIcon, pytorchIcon, gitIcon],
			img: minitorchImg,
			linkText: "View Project",
			link: "https://github.com/shreyasriram4/minitorch_MLE",
		},
	],
	articles: [
		{title: "DNA & Data",
		date: "1 November 2022",
		description: "Did you know that humans share about 60% of our DNA with bananas? In this article, we study DNA through data as we build a machine learning model to predict m6A modification sites on human cancer cell lines.",
		img: dnaImg,
		linkText: "Read article",
		link: "https://medium.com/@shreyasriram4/data-dna-45123f410ff3"
		},
		{
			title: "Modeling Employee Attrition",
			date: "19 August 2022",
			description:
				"Employee attrition is a major issue faced by companies all over the world. In this article, I delve into the data to figure out why employees quit.",
			img: workplaceImg,
			linkText: "Read article",
			link: "https://medium.com/@shreyasriram4/modeling-employee-attrition-146323d53439",
		},
		
		
	]
};

export default INFO;
