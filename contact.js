function Contact (Surname, Firstname, Phone_number, email, address) {
 
		this.Surname=Surname;
		this.Firstname=Firstname;
		this.Phone_number=Phone_number;
		this.email=email;
		this.address=address;
}

 var allan= new Contact("Mugumbya","Allan","0790378727","allanmugumbya@gmail.com","kampala");

	Contact.prototype.fullname=function()
	{
	return this.Firstname +"," this.Surname}

