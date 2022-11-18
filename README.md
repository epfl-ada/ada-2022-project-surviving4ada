# ada-2022-project-surviving4ada
Team member: Zhan Li, Yuheng Lu, Xiyun Fu, Yichen Liu
## Abstract
Wikispeedia is a dataset that collected human navigation paths on Wikipedia in terms of games, which implies all the connection between articles is created from human intuition. As wikispeedia dataset can be considered as a language “map”, including tons of criss-cross article navigation paths, we try to find out 100 of the most popular words that were identified as linguistic 'transport hubs', based on their click-through and reach rates. After clustering, they are compared with other datasets (e.g. media corpus, national economic power, technological development index) to find out whether these 'transport hubs' are equally influential in the real world, and whether their impact changes with time.

In addition, we are also curious about the semantic distance between articles. Is the length of the path between two words representative of the semantic distance between the two articles? We compared the path lengths with the results of using vector embeddings.

### Research questions
1. By counting the number of times a word appears in paths during one whole year, which are the top 100 articles？
2. Are the words most popular in wikispeedia also most ‘powerful’ in other datasets? We selected two datasets, xx and xx, for an initial comparison.
3. If the answer of question 2 is yes, are their changing trends in different years matching too?
4. Do hot articles accelerate the reach of the target?
5. Whether the semantic distance defined based on path length shows consistency with the similarity analysis based on the vector embeddings？

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
|                  **2011**                    |                   **2012**                   |                **2013**                                                 :-----:|:-----:|:-----:|
|<img src=pic2011.png width="300" height="250">|<img src=pic2012.png width="300" height="250">|<img src=pic2011.png width="300" height="250">


#### **Determining category granularity**
We wanted to rank the frequency of occurrence of articles in the same category and then compare the degree of overlap with the corresponding words in the additional dataset. Considering that the classification needs to be easy to understand and that each category should contain a sufficient number of articles, we chose the penultimate level category of the articles as the unique category.

#### **Ranking comparison**
Sort and rank the terms according to their categories in wikispeedia, find the corresponding articles in other datasets and rank their frequency of occurrence to compare their degree of overlap.
Since the top100 contains many articles in the country category, we use this category as an example for comparison with **GDP_world_bank**. For the countries appearing in the top100 articles, a comparison of their hotness in  wikispeedia and national GDP shows that there are a tendency to homogenise. 
<img src = pic2.png width="500" height="500">

For the future milestone, we will add more interesting comparisons based on different category.

#### **Are hot articles an accelerator?**
For the finished path dataset, calculate the average length of the path focus after the occurrence of top 100 articles repectively, and the rate of path ending within 3 articles after top 100 articles occured. For the unfinished path dataset, calculate the average duration time of the paths top 100 articles appeared.
Create a random collection of articles to be compared with the top100 articles, and conclude whether the hotwords are accelerated or not.

### Semantic distance analysis:
Use Doc2vec to obtain the embedding vectors of each document. Then calculate the cosine similarity between the representations of two articles to obtain their semantic distance.

**Visualisation**

<img src= pic1.png width="600" height="600">

Use heatmap to show the cosine similarity matrix (which represents the semantic distance).

### **Proposed timeline**
Before December 5
Fu Xiyun : Trends comparison and statistical analysis of the data
Li Zhan : Data visualization and semantic distance analysis
Lu Yuheng : The basic architecture construction of the web page and the causal relationship analysis between ‘Transport Hub’ and real world data
Liu Yichen : Analysis of two external dataset and do some visualization 

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


