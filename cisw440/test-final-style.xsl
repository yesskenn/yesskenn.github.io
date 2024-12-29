<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html"/>

<xsl:template match="/">

<html>
  <body>
    <h2>Company</h2>
    <table border="1">
     <tr bgcolor="#9acd32">
 <th>ID</th>
<th>FullName</th>
 <th>FavoriteColor</th>
 <th>Age</th>
      </tr>
      <xsl:for-each select="Company/Person">
      <tr>
 <td><xsl:value-of select="Id" /></td>
 <td><xsl:value-of select="FullName" /></td>
 <td><xsl:value-of select="FavoriteColor" /></td>
 <td><xsl:value-of select="Age" /></td>
</tr>
</xsl:for-each>
     </table>
   </body>
 </html>
</xsl:template>
</xsl:stylesheet>