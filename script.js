/* ========================================
   DEALZENO LINKS
   ======================================== */


/* Monetag Direct Link */

const MONETAG_LINK =
    "https://omg10.com/4/11706929";


/* Instagram */

const INSTAGRAM_LINK =
    "https://www.instagram.com/dealzeno2/";


/* Telegram */

const TELEGRAM_LINK =
    "https://t.me/YOUR_CHANNEL";


/* Facebook */

const FACEBOOK_LINK =
    "https://www.facebook.com/YOUR_PAGE";


/* WhatsApp */

const WHATSAPP_LINK =
    "https://wa.me/YOUR_NUMBER";


/* ========================================
   CONNECT LINKS TO BUTTONS
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const adButton =
        document.getElementById("adButton");

    const telegramButton =
        document.getElementById("telegramLink");

    const facebookButton =
        document.getElementById("facebookLink");

    const instagramButton =
        document.getElementById("instagramLink");

    const whatsappButton =
        document.getElementById("whatsappLink");


    /* Monetag */

    if (adButton) {
        adButton.href = MONETAG_LINK;
    }


    /* Telegram */

    if (telegramButton) {
        telegramButton.href = TELEGRAM_LINK;
    }


    /* Facebook */

    if (facebookButton) {
        facebookButton.href = FACEBOOK_LINK;
    }


    /* Instagram */

    if (instagramButton) {
        instagramButton.href = INSTAGRAM_LINK;
    }


    /* WhatsApp */

    if (whatsappButton) {
        whatsappButton.href = WHATSAPP_LINK;
    }

});
