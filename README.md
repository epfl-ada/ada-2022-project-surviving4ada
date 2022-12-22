# Wikispeedia! A path from wiki to real world?
Team member: Zhan Li, Yuheng Lu, Xiyun Fu, Yichen Liu
## Abstract
WIkispeedia is a the human-computation game in which users are asked to navigate from a given source to a given target article, by only clicking Wikipedia links, which implies all the connection between articles is created from human intuition.  This dataset contains human navigation paths on Wikipedia, collected through Wikispeedia. This dataset contains data from 2011 to 2014, but we have discarded the 2014 data because it is significantly smaller than the other three years.

As wikispeedia dataset can be considered as a article ‘**map**’, including tons of criss-cross article navigation paths, we try to find out 100 of the most popular words that were identified as Wikispeedia **‘transport hubs’**, based on their click-through.

### Research questions
1. Do hot articles accelerate the reach of the target?
2. If yes, 
-- what makes people choose these transport hubs? What do these transport hubs have in common?
-- Do they all contain richer semantic information? Or what happened in real life to cause them to be more easily recalled?

### Addition dataset
1. **News Category Dataset** from kaggle
   The format of the data can be found in the News_Category_Dataset_v3.json file. We scrap only the attributes "headline", "date" for the investigation of each ‘Transport Hub’ ‘s popularity in the media.
2. **GDP_world_bank** from World Bank website
    The csv file GDP_world_bank contains every country's GDP from 1960-2022. We will use the ‘Country” and “2011”,”2012”,”2013” column.

### Methods
#### **Initial data processing**
- Drop the rows which have null elements in column 'hashedIpAddress'
- Only data from 2011-2014 are retained to align the unfinished dataset with the finished dataset in the time feature
- Split the strings in the column 'path' and transform them into lists
- Considering the excessive difference in volume between the 2014 data and the 2011-2013 data, we will not consider the 2014 data for the time being

#### **Find the highest frequent articles**
Identify the 100 most frequently occurring words in the paths each year, and use WordCloud plot to show how often each article is passed over relatively.
#### **Visualisation**
|                  **2011**                     |                   **2012**                    |                **2013**                      |                                                                                       
|-----------------------------------------------|-----------------------------------------------|----------------------------------------------|
|<img src=pic2011.png width="300" height="250" >|<img src=pic2012.png width="300" height="250" >|<img src=pic2013.png width="300" height="250">｜



#### **Determining category granularity**
We wanted to rank the frequency of occurrence of articles in the same category and then compare the degree of overlap with the corresponding words in the additional dataset. Considering that the classification needs to be easy to understand and that each category should contain a sufficient number of articles, we chose the penultimate level category of the articles as the unique category.

#### **Ranking comparison**
Sort and rank the terms according to their categories in wikispeedia, find the corresponding articles in other datasets and rank their frequency of occurrence to compare their degree of overlap.
Since the top100 contains many articles in the country category, we use this category as an example for comparison with **GDP_world_bank**. For the countries appearing in the top100 articles, a comparison of their hotness in  wikispeedia and national GDP shows that there are a tendency to homogenise. 
<img src = pic1.png width="500" height="500">

For the future milestone, we will add more interesting comparisons based on different category.

#### **Are hot articles an accelerator?**
For the finished path dataset, calculate the average length of the path focus after the occurrence of top 100 articles repectively, and the rate of path ending within 3 articles after top 100 articles occured. For the unfinished path dataset, calculate the average duration time of the paths top 100 articles appeared.
Create a random collection of articles to be compared with the top100 articles, and conclude whether the hotwords are accelerated or not.

### Semantic distance analysis:
Use Doc2vec to obtain the embedding vectors of each document. Then calculate the cosine similarity between the representations of two articles to obtain their semantic distance.

**Visualisation**

<img src= pic2.png width="600" height="500">

Use heatmap to show the cosine similarity matrix (which represents the semantic distance).

### **Proposed timeline**
Before December 5
- Fu Xiyun : Trends comparison and statistical analysis of the data
- Li Zhan : Data visualization and semantic distance analysis
- Lu Yuheng : The basic architecture construction of the web page and the causal relationship analysis between ‘Transport Hub’ and real world data
- Liu Yichen : Analysis of two external dataset and do some visualization 

### **Team Organization**
**Milestone 2**
- Fu Xiyun : Create and write a README.
- Li Zhan : Identify the 100 most frequently occurring words in the paths each year. Conduct the data visualization and the semantic distance analysis.
- Lu Yuheng : Initial data processing: get the dataframe from the dataset and implement the code in getting the top 50 words and random words set. 
- Liu Yichen : Investigate the two external dataset and did initial data analysis

**Milestone 3**
- Fu Xiyun :data story: analysis and web design
- Li Zhan : nlp&data story
- Lu Yuheng : web page design&data story: pipeline in processing data
- Liu Yichen : data story: analysis and readme


