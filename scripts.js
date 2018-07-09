$(function () {
    // elemek összegyűtése
    let $form = $('form');
    let $button = $('button.btn-primary');
    let $email = $('input[type="email"]');
    let $password = $('input[type="password"]');
    let $alertSuccess = $('div.alert-success');
    let $alertDanger = $('div.alert-danger');

    // console.log($email);    

    // email és jelszó megadása
    const email = 'user@doamin.hu';
    const password = '123456';

    $button.click(function (event) {
        // alapértelmezett eseményre reagálás megakasztása
        event.preventDefault();

        // eldönteni, hogy bejelentkezhet-e
        if (email === $email.val() && password === $password.val()) {
            $alertDanger.hide();
            $alertSuccess.show();
            // $form.hide();
        } else {
            $alertSuccess.hide();
            $alertDanger.show();
        }


        console.log('click történt');
    });
});