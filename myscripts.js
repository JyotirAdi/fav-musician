function validateform() {
    var name = document.contact_form.first_name.value;
    var lastname = document.contact_form.last_name.value;
    var email = document.contact_form.email.value;
    var message = document.contact_form.message.value;

    if (name == null || name == "") {
        alert("First Name can't be blank");
        return false;
    } else
    if (lastname == null || lastname == "") {
        alert("Last Name can't be blank");
        return false;
    } else
    if (message == null || message == "") {
        alert("Message Name can't be blank");
        return false;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}