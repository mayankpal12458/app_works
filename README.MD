To run the Frequency Counter Project you need to start your Node.js server. Then run command-  node index.js
I have Used MVC structure for this project.
Libraries used : 

    1. express

    2. lodash

    3. http

    4. body-parser

    5. ejs

    6. cors

    7. fs

Different Components used in this project are :-
    Back End

    I have first fetched the file from given link using Node.js. Then stored the contents of file in file.txt .

    1.Container.js  -  This file requires dependable module.I have made this so that I can require and register the frequently used modules here.
                        Because of this module I dont have to 'require' modules again and again in different files.

    2.index.js  -  This is the main server file which needs to be run everytime you launch the project. In this file I have 'require' express
                    and made the server. The port is also defined in this file. Mainly express is setup here and different modules are configured.
                    Route call is also made in this file. Although all routes are stored in different folder. 
                     
                     'https://gitlab.com/snippets/1824628/raw'- This link is used to fetch the data. The request made from node.js server to the link will
                     actually be a cross-domain request and will not be permitted.
                     So to resolve this issue I have used 'cors' module which stands for Cross-Origin -Resource-Sharing.      

    3. controllers-> homepage.js  -  The 'get' and 'post' route is defined here for url '/'.
                                        'get' route simply calls res.render('home').
                                        'post' route is place where main logic of finding N frequent words is written.

    -LOGIC for finding N frequent words : ->At First I have split the string by spaces(including space,tabs,newline).  
                                            ->Then I have created a wordmap where a simple map is created which stores the frequency of each word occuring in the text.
                                            if word occurs for first time mark the value of that key as 1 and then if it occurs again increment the value by 1.
                                            ->Then I have applied sort by count in descending order on the map. This will return an array.
                                            ->Then I stored the first N elements of the descending order sorted array into a different array(arr).

    Front End

    views->home.ejs  -> This is an animation front end. Animation is created using Javascript. HTML5 and CSS are used.
                        A form is created which contains an 'input' type of number and a 'textarea' to display the output.
                        Output format --- N words list of type  word-frequency.

    startpage.js -- This is a JQuery file which is linked with home.ejs. This file is made for sending input N to backend i.e  to 'post' route of page.
                    In post route I have used  res.send(arr). Therefore in success method $.ajax({}) I got my final array containing N most frequent words with their frequencies.
                    In JQuery itself I printed this data of callback function (final output array) into the textarea.            