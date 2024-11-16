<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="/">


<html>
    <body>


        <p>This patient's name is <xsl:value-of select="Records/Patient/FullName" /> and he visited on <xsl:value-of select="Records/Patient/ServiceDate" /> </p>
        </xsl:value-of>
        
    </body>


</html>

</xsl:template>
</xsl:stylesheet>
