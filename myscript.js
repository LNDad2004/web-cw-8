// ------------------------------ 1️⃣ السؤال الأول ------------------------------
//     - driving اسمها function عرف دالة او
//     - تأخذ عمر شخص (رقم) واذا كان اكبر من 18 تطبع
//          🚘😍 مبروك سوف تحصل على الليسن
//     - واذا كان اقل من 18 يطبع
//          😢 للاسف عمرك لا يسمح
//     console.log ، if ملاحظة: سوف تستخدم

// 👇 هنا function عرف الدالة او
// let driving = 16
// if (driving >= 18) {
//     console.log(`🚘😍 مبروك سوف تحصل على الليسن`)
// }
// else if (driving < 18) {
//     console.log(`😢 للاسف عمرك لا يسمح`)
// }
function driving(x) {
    if (x >= 18) {
        console.log(`🚘😍 مبروك سوف تحصل على الليسن`)
    }
    else if (x < 18) {
        console.log(`😢 للاسف عمرك لا يسمح`)
    }
}
driving(18)


// لا تنسى أن تنادي الدالة



// ------------------------------ 2️⃣ السؤال الثاني ------------------------------
// 2️⃣ السؤال الثاني
//     - iceCream واجعل اسمها array عرف مصفوفة او
//     - 🍦 احفظ فيها مجموعة من نكهات الآيس كريم
//     - console.log لطباعة قائمة نكهات الآيس كريم بإستخدام for loop استخدم

// 👇 هنا array عرف المصفوفة او

let iceCream = ["chocolate","vanilla","rasberry","mango"]

 for (let x of iceCream) {
    console.log(x)
 }



// --------------------------------- ✨ بونص ------------------------------------
// بحيث عند مناداة الدالة تطبع القائمة myIceCream بإسم function عرف دالة او
let myIceCream = ["mango","rasberry","vanilla","chocolate"]
function MyIceCream(y) {
    for (let t of myIceCream) {
        console.log(t)
    }

}
MyIceCream(1)
// for loop عرف مصفوفة أخرى تحتوي على أفلامك الكرتون المفضلة بالنسبة لك وقم بطباعة الأفلام بإستخدام
let cartoons = ["Avatar:The last air bender","The Legend Of Korra","Rick and Morty"]
// --------------------------------- 🔥 بونص ------------------------------------
// while loop اطبع احد المصفوفات بإستخدام
let vari = 0
while (vari < cartoons.length) {
    console.log(cartoons[vari])
    vari++
}

