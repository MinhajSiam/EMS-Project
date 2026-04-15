document.getElementById('admissionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let studentClass = document.getElementById('class').value;
    let roll = document.getElementById('roll').value;

    // ব্রাউজারের সাধারণ অ্যালার্ট
    alert("✅ সফল! " + name + " (শ্রেণী: " + studentClass + ", রোল: " + roll + ") সিস্টেমে যুক্ত হয়েছে।");

    // ফর্ম ক্লিয়ার করা
    this.reset();
});