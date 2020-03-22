-include Makefile.local

assets: ext/jquery-3.4.1.min.js ext/popper.min.js ext/bootstrap.min.css ext/bootstrap.min.js ext/jquery.dataTables.min.js ext/dataTables.bootstrap4.min.js ext/dataTables.bootstrap4.min.css 

ext/jquery-3.4.1.min.js:
	cd ext && wget "https://code.jquery.com/jquery-3.4.1.min.js"
ext/popper.min.js:
	cd ext && wget "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
ext/bootstrap.min.css:
	cd ext && wget "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
ext/bootstrap.min.js:
	cd ext && wget "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
ext/jquery.dataTables.min.js:
	cd ext && wget https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js
ext/dataTables.bootstrap4.min.js:
	cd ext && wget "https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"
ext/dataTables.bootstrap4.min.css:
	cd ext && wget "https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css"

.PHONY: assets mails.json upload
