fs.readFile("index.html", "utf8", (error, data) => {
    res.end(data);
});



    