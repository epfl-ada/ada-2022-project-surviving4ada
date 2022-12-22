# Wikispeedia! A path from wiki to real world?
Team member: Zhan Li, Yuheng Lu, Xiyun Fu, Yichen Liu
## Abstract
WIkispeedia is a the human-computation game in which users are asked to navigate from a given source to a given target article, by only clicking Wikipedia links, which implies all the connection between articles is created from human intuition.  This dataset contains human navigation paths on Wikipedia, collected through Wikispeedia. This dataset contains data from 2011 to 2014, but we have discarded the 2014 data because it is significantly smaller than the other three years.

As wikispeedia dataset can be considered as a article ‘**map**’, including tons of criss-cross article navigation paths, we try to find out 100 of the most popular words that were identified as Wikispeedia **‘transport hubs’**, based on their click-through.

### Research questions
- Do hot articles accelerate the reach of the target?
- If yes, what makes people choose these transport hubs? What do these transport hubs have in common?
   - Do they all contain richer semantic information? 
   - Or what happened in real life to cause them to be more easily recalled?

### Addition dataset
1. **News Category Dataset** from kaggle
   The format of the data can be found in the News_Category_Dataset_v3.json file. We scrap only the attributes "headline", "date" for the investigation of each ‘Transport Hub’ ‘s popularity in the media.
2. **GDP_world_bank** from World Bank website
    The csv file GDP_world_bank contains every country's GDP from 1960-2022. We will use the ‘Country” and “2011”,”2012”,”2013” column.

### Methods

#### **External libraries**
- scipy
- sklearn
- Genism
- matplotlib
- seaborn
- nltk
- wordcloud

#### **Initial data processing**
- Drop the rows which have null elements in column 'hashedIpAddress'
- Only data from 2011-2014 are retained to align the unfinished dataset with the finished dataset in the time feature
- Split the strings in the column 'path' and transform them into lists
- Considering the excessive difference in volume between the 2014 data and the 2011-2013 data, we will not consider the 2014 data for the time being

#### **Find transport hubs**
Identify the 100 most frequently occurring words in the paths each year, and use WordCloud plot to show how often each article is passed over relatively.
|                  **2011**                     |                   **2012**                    |                **2013**                      |                                                                                       
|-----------------------------------------------|-----------------------------------------------|----------------------------------------------|
|<img src=image/cloud_2011.png width="300" height="200" >|<img src=image/cloud_2012.png width="300" height="200" >|<img src=image/cloud_2013.png width="300" height="200">


#### **Do hot articles accelerate the reach of the target?**
We conducted a causal analysis of the average shortest distance from the starting article to the destination using linear regression: Match a random collection of articles to be compared with the transport hub articles, and conclude whether the hotwords are accelerated or not.

#### **Semantic distance analysis**
Use Doc2vec to obtain the embedding vectors of each document. Each article is represented as a vector of length 300. Then calculate the cosine similarity between the representations of two articles to obtain their semantic distance.

#### **Cluster**
Use k-means in sklearn, noting that k-means in scikit-learn only supports Euclidean distances, so we normalized the text vectors so Euclidean distances are equivalent to cosine distances. After clustering, we compare the clustering results with the real categories and get almost the same categories, so we consider the clustering results credible.
We also did PCA cluster for more intuitive visualisation of results.

#### **For typical nation terms: GDP Ranking comparison**
Sort and rank the terms according to their categories in wikispeedia, find the corresponding articles in other datasets and rank their frequency of occurrence to compare their degree of overlap.
Since the top100 contains many articles in the country category, we use this category as an example for comparison with **GDP_world_bank**. For the countries appearing in the top100 articles, a comparison of their hotness in  wikispeedia and national GDP shows that there are a tendency to homogenise. 
<img src = image/pic1.png width="500" height="500">

### **Team Organization**
- Fu Xiyun : Data analysis & Web design
- Li Zhan : Casual inference & Cluster & Data story
- Lu Yuheng : Data preprocess & Cluster & Data visualization
- Liu Yichen : data story & Data visualization


