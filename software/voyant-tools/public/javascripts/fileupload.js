    uploadFile = function() {
           if (!window.FileReader) {
            alert('Your browser is not supported')
        }
        var input = fileInput.get(0);
        
        // Create a reader object
        var reader = new FileReader();
        if (input.files.length) {
            var textFile = input.files[0];
            reader.readAsText(textFile);
            $(reader).on('load', processFile);
        } else {
            alert('Please upload a file before continuing')
        } 
    }
    
    function processFile(e) {
        var file = e.target.result,
            results;
        if (file && file.length) {
            results = file.split("\n");
            $('#text-input').text(results);           
        }
    }

  /*function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    var reader = new FileReader(); 
    console.log(files.FileList);
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  // Setup the dnd listeners.
  var dropZone = document.getElementById('drop-zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);*/


//Dropbox upload necessary with webserver?

 /* var client = new Dropbox.Client({ key: 'b671y7l5vwfj9l3' });
 
        function doHelloWorld() {
            client.writeFile('hello.txt', 'Hello, World!', function (error) {
                if (error) {
                    alert('Error: ' + error);
                } else {
                    alert('File written successfully!');
                }
            });
        }
 
        // Try to complete OAuth flow.
        client.authenticate({ interactive: false }, function (error, client) {
            if (error) {
                alert('Error: ' + error);
            }
        });
 
        if (client.isAuthenticated()) {
            //doHelloWorld();
        }
 
        uploadButton.click(function () {
            client.authenticate(function (error, client) {
                if (error) {
                    alert('Error: ' + error);
                } else {
                    doHelloWorld();
                }
            });
        }); 

    */