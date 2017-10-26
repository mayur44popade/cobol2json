# cobolParser
parser to generate a JSON object from a COBOL copybook

Even today many companies use Customer Information Control System(CICS) as a backend. CICS uses cobol copybooks as data elements to store data. But nowadays most software systems use formats such as XML, JSON. These data formats are easy to use and well understood by all. So I decided to develop a module that converts a COBOL copybook to a JSON data format. CICS accepts inputs in the form of a buffer and returns a string buffer. A buffered string will be output of this module. So, module can be used to automate element mapping in APIs

Input:
A cobol copybook can be converted into XML data format using Qt creator. XML file acts as input to our system.

Processing:
I used 'xml2js' module to 
