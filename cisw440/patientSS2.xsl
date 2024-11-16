<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html"/>
<xsl:template match="/">


<html>
    <body>
        <xsl:for-each select="Records/Patient">

        
        <table style="border: solid 1px black; width: auto; border-collapse: collapse; width: 600px; table-layout:fixed;"> 
       
        <tr style="border: solid 1px black; height: 28px; width:100%;"> 
        <td style="border: solid 1px black; width: 20px;"><xsl:value-of select="ID" /></td>
        <td style="border: solid 1px black; width:100%;"><xsl:value-of select="FullName" /></td>
        <td style="border: solid 1px black; width:100%;"><xsl:value-of select="DOB" /></td>
        <td style="border: solid 1px black; width:100%;"><xsl:value-of select="Gender" /></td>
        <td style="border: solid 1px black; width:100%;"><xsl:value-of select="ServiceDate" /></td>
        <td style="border: solid 1px black; width:100%;"><xsl:value-of select="ProcedureCode" /></td>
        <td style="border: solid 1px black; width:100%;"><xsl:value-of select="PrimaryDiagnosis" /></td>
        </tr>
        </table>
        </xsl:for-each>
    </body>


</html>

</xsl:template>
</xsl:stylesheet>

