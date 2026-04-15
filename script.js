document.getElementById('admissionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // ফর্ম থেকে ডেটা নেওয়া
    let name = document.getElementById('name').value;

    // টোস্ট নোটিফিকেশন দেখানো
    let toast = document.getElementById("toast");
    let toastMessage = document.getElementById("toast-message");

    toastMessage.innerText = name + " -এর ডেটা সফলভাবে সিস্টেমে এন্ট্রি হয়েছে।";

    toast.className = "toast show";

    // ৩ সেকেন্ড পর নোটিফিকেশন গায়েব হয়ে যাবে
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 3000);

    // ফর্ম ক্লিয়ার করা
    this.reset();
});