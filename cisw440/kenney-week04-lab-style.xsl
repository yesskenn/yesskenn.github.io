<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 

<xsl:output method="html"/>
<xsl:template match="/">


<html>
<head>
</head>

<body>
      
  <table>
  <tr><th>Hospital Records</th></tr>
  </table>

<table style="border: solid 1px black; width: auto; border-collapse: collapse; width: 600px; table-layout:fixed;"> 
    <tr style="border: solid 1px black; height: 28px; width:100%;">
    <th style="border: solid 1px black; width: 20px;">ID</th>
    <th style="border: solid 1px black;">Full Name </th>
    <th style="border: solid 1px black;">DOB</th>
    <th style="border: solid 1px black;">Gender</th>
    <th style="border: solid 1px black;">Service Date</th>
    <th style="border: solid 1px black;">Procedure Code</th>
    <th style="border: solid 1px black;">Primary Diagnosis</th>
    <th style="border: solid 1px black;">Full Name Character Length</th>
    </tr>
</table>
        
<xsl:for-each select="Records/Patient">
<xsl:sort select="FullName" order="descending" data-type="text" />
<table style="border: solid 1px black; width: auto; border-collapse: collapse; width: 600px; table-layout:fixed;"> 

    <tr style="border: solid 1px black; height: 28px; width:100%;"> 
    <td style="border: solid 1px black; width: 20px;"><xsl:value-of select="ID" /></td>
    <td style="border: solid 1px black; width:100%;"><xsl:value-of select="FullName" /></td>
    <td style="border: solid 1px black; width:100%;"><xsl:value-of select="DOB" /></td>
    <td style="border: solid 1px black; width:100%;"><xsl:value-of select="Gender" /></td>
    <td style="border: solid 1px black; width:100%;"><xsl:value-of select="ServiceDate" /></td>
    <td style="border: solid 1px black; width:100%;"><xsl:value-of select="ProcedureCode" /></td>
    <td style="border: solid 1px black; width:100%;"><xsl:value-of select="PrimaryDiagnosis" /></td>
    <td style="border: solid 1px black; width:100%;"><xsl:value-of select="string-length(FullName)" /></td>
    </tr>
        </table> 
    </xsl:for-each>
    <p> This person, <xsl:value-of select="//FullName[text()='John Doe']" /> is a <xsl:value-of select="//Gender[text()='Male']" /> with a birth date of <xsl:value-of select="//DOB[text()='3/2/1987']" /> that was seen at the doctor's office on <xsl:value-of select="//ServiceDate[text()='4/5/2016']" /> for diagnosis <xsl:value-of select="//PrimaryDiagnosis[text()='R51']" />.</p>

    </body>
    </html>
    </xsl:template>
    </xsl:stylesheet>