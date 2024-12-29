<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html"/>
<xsl:template match="/">


<html>
<head>
<title>Kenney Final Project</title>
  
</head>

  <style>
    *{
      margin: 0 auto;
    }

    #intro, #outro {
      width: 840px;
      margin: 20px auto;

    }

    #recap{
      display: flex;
      flex-direction: row;
      width: 840px;
      margin: 20px auto;
      gap: 40px;
      
    }
    

    p, h1, h2, h3{
      font-family: Arial;
      padding: 6px 0;

    }

    table {
      width: 1280px;
      border-collapse: collapse;
      background-color: #fafafa;
      font-family: Arial;
    }

    tr {
      
    }

    th {
      border: solid 1px black;
      text-align: center;
    }

    td { 
      border: solid 1px black;
      height: 18px;
      text-align: center;
    }
    .pid, .bedBath, .yearBuilt, .lotSize{
      width: 80px;
    }

    .city, .price {
      width: 120px;
    }

    .hasHoa {
      width: 60px;
    }

  </style>
<body>
<div id="intro">
<h1> Kenney Final Project</h1>
<h2> CISW440 • Fall 2024</h2>
<h3>Intro</h3>
<p>The real estate industry holds a lot of data related to the listings that get put on and get bought off the market every day. 
I thought it would be interesting to explore the websites where the houses and properties are listed and see what exactly it is that I can do with the data. 
I think a lot of the listings come from the MLS and websites — such as Zillow and Redfin — use that data to put it on their own websites. This makes XML useful because the data will be the same at the source, and remain consistent no matter which websites it is presented on. </p></div>
<div id="recap">
<div id="column1"><h3>Recap</h3>
<p>The following listings are located in the Greater Sacramento area, which includes 
<!-- I tried to do grouping for this to remove duplicates, but wasn't able to get it right. Maybe because I used entities for the cities and they didn't render right, but I have to play around with it some more.-->
<xsl:for-each select="//city">
<xsl:value-of select="."/>
    <xsl:choose>
    <xsl:when test="position()=last()">.</xsl:when>
    <xsl:when test="position()=last()-1">, and </xsl:when>
    <xsl:otherwise>, </xsl:otherwise>
    </xsl:choose>
</xsl:for-each>
</p>
<p>There are <xsl:value-of select="count(//hasHoa[. = 'No'])"/> properties that do not have a HOA, which may be attractive to potential buyers.</p>
</div>
<div id="column2"><h3>Featured</h3>
 <p> Property <xsl:value-of select="//propertyID[text()='330108']"/>, located in the greater <xsl:value-of select="//city[text()='Sacramento']" /> area — <xsl:value-of select="//hasHoa[text()='yes']" /> impresses potential homebuyers with the following features: <xsl:value-of select="//features[text()='Pool, 2-story, flexible layout']" /> that was built in the year <xsl:value-of select="//yearBuilt[text()='1950']" />.</p>
  </div>
  </div>


       <table id="tableHead">

       <tr>
        <th class="pid">ID</th>
        <th class="city">City </th>
        <th class="price">Price</th>
        <th class="bedBath">Bed/Bath</th>
        <th class="lotSize">Lot Size</th>
        <th class="yearBuilt">Year Built</th>
        <th class="features">Features</th>
        <th class="hasHoa"><a href="javascript:void();" onclick="sortByHoa()">HOA ↓↑</a></th> <!--The idea here was to create a link or add a button to be able to sort this column on a click, but I was unable to fully implement this. I kept having trouble with the JavaScript portion. -->
       </tr>
       </table>
 
       <table id="tableBody"> 
                     <xsl:for-each select="Listings/Property">
            <xsl:sort select="price" order="ascending" data-type="text" />
       
        <tr>         
          <td class="pid"><xsl:value-of select="propertyID" /></td>
          <td class="city"><xsl:value-of select="city" /></td>
          <td class="price"><xsl:value-of select="price" /></td>
          <td class="bedBath"><xsl:value-of select="bedBath" /></td>
          <td class="lotSize"><xsl:value-of select="lotSize" /></td>
          <td class="yearBuilt"><xsl:value-of select="yearBuilt" /></td>
          <td class="features"><xsl:value-of select="features" /></td>
          <td class="hasHoa"><xsl:value-of select="hasHoa" /></td>
        </tr>
        

         </xsl:for-each>
       
        </table>
       
 
     <div id="outro">
    <h3>Why I Chose the Price Column To Sort</h3>
     <p>I chose to sort by price. When people are buying homes, they will probably have a budget in mind and being able to sort according to price will allow them to view their desired listings more easily. Others might want to sort according to how big the surrounding property is, or even by special features. </p>
  <h3>How I Will Use This Knowledge</h3>
 <p> A few months back, I worked on creating some accessible documents that were rendered in XM. Although I had a vague idea of what I was looking at because it looked similar to HTML, I didn't know what it meant. Moving forward I will be able to not only read documents like that, I will be able to create them or even manipulate data to create other products. At the very least, I learned more research skills that I will definitely be using as I move forward in my career, hopefully towards a solid IT position focused on web development. </p>
    </div>


    </body>


</html>

</xsl:template>
</xsl:stylesheet>

