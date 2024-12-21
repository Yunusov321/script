let userName = prompt("Ismingizni kiriting");

const letter = prompt("Bironta harf kiriting:");

if (userName.includes(letter)) {
    alert(`Kiritgan ismingizda ${letter} harfi mavjud`);
} else {
    alert(`Kiritgan ismingizda ${letter} harfi mavjud emas`);
}