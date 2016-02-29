# file-upload-example

Simple file upload with blueimp-file-upload direct to S3 with node.


Run with
1. Clone
2. Install
npm install
3. Start
npm server.js
4. Enjoy

----- 

Don't forget to add a cross-originC(CORS) rule to your AWS S3 CORS configuration to prevent the cross-origin request error even if it's hosted from EC2 and not localhost:

    <CORSRule>
        <AllowedOrigin>http://localhost:8080</AllowedOrigin>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>

this rule should be added to your XML file under your S3 bucket properties -> permissions -> edit CORS configuration link

see this link for more info about CORS and AWS if unsure: http://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html
