function User(emailUser, passUser, tenUser, genderUser, phoneUser) {
	this.email = emailUser;
	this.password = passUser;
	this.name = tenUser;
	this.gender = genderUser || true;
    this.phone = phoneUser;	
}
	