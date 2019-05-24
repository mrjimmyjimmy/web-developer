RESTFUL ROUTES

name      url             verb      description
====================================================================
INDEX     /dogs           GET       Display a list of all dogs
CREATE    /dogs           POST      Add a new dog to DB
NEW       /dogs/new       GET       Display form to make a new dog
SHOW      /dogs/:id       GET       Shows info about one dog
EDIT      /dogs/:id/edit  GET       Shows edit from one dog
Update    /dogs/:id       PUT       Update a particular dog, then redirect somewhere
Destroy   /dogs/:id       DELETE    Delete a particular dog, then redirect somewhere 
