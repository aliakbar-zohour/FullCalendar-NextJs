# README.md

# 📅 Next.js FullCalendar Reservation System

یک سیستم رزرو حرفه‌ای با **Next.js 14**, **FullCalendar**, **Framer Motion**, و **react-multi-date-picker**
این پروژه به شما امکان می‌دهد یک **تقویم رزرو فارسی (شمسی)** داشته باشید که شامل ویژگی‌های زیر است:

---

## ✨ ویژگی‌ها

* 📌 **تقویم فارسی (شمسی) با پشتیبانی از FullCalendar**
* ⏰ محدودیت ساعت رزرو (۸ صبح تا ۸ شب)
* 🎨 رنگ‌بندی برای روزهای رزرو شده
* 🚫 امکان بلاک کردن روزها (رزرو غیرممکن)
* 👤 نمایش رزروها همراه با **عکس و نام کاربر**
* 🔄 قابلیت **درگ و دراپ** و جابجایی رزروها
* 🗓 نمایش در حالت‌های **ماه، هفته و روز**
* 🖊 **مودال جزئیات رزرو** با قابلیت:

  * نمایش اطلاعات کامل (کاربر، توضیحات، تاریخ شروع/پایان)
  * ویرایش رزرو
  * حذف رزرو
* ➕ دکمه **ایجاد رزرو جدید**:

  * انتخاب کاربر از API
  * انتخاب تاریخ شروع و پایان با **تقویم شمسی فارسی**
  * اضافه کردن توضیحات
  * نمایش فوری روی تقویم

---

## 📸 پیش‌نمایش

> 🔽 یک دموی تصویری اضافه کنید:
> (اسکرین‌شات یا GIF از صفحه‌ی رزرو)

```bash
/screenshots/demo.gif
```

---

## 🚀 راه‌اندازی پروژه

### 1️⃣ کلون کردن مخزن

```bash
git clone https://github.com/your-username/reservation-calendar.git
cd reservation-calendar
```

### 2️⃣ نصب وابستگی‌ها

```bash
npm install
```

### 3️⃣ اجرای پروژه در حالت توسعه

```bash
npm run dev
```

پروژه روی [http://localhost:3000](http://localhost:3000) اجرا می‌شود 🚀

---

## 📦 تکنولوژی‌ها

* [Next.js 14](https://nextjs.org/) (App Router)
* [FullCalendar](https://fullcalendar.io/) (تقویم قدرتمند)
* [Framer Motion](https://www.framer.com/motion/) (انیمیشن‌ها)
* [React Multi Date Picker](https://shahabyazdi.github.io/react-multi-date-picker/) (تاریخ‌پیکر شمسی فارسی)
* [Tailwind CSS](https://tailwindcss.com/) (استایل‌دهی مدرن)

---

## 📂 ساختار پروژه

```
app/
 ├─ api/
 │   ├─ events/route.ts   # API ایونت‌ها (CRUD رزرو)
 │   └─ users/route.ts    # API کاربران
 ├─ calendar/page.tsx     # صفحه اصلی تقویم
 └─ globals.css           # استایل‌ها
```

---

## 🛠 API Endpoints

### 📌 Events

* `GET /api/events` → دریافت همه رزروها
* `POST /api/events` → ساخت/ویرایش رزرو
* `DELETE /api/events` → حذف رزرو

### 📌 Users

* `GET /api/users` → دریافت لیست کاربران (برای انتخاب رزرو)

---

## 👨‍💻 توسعه‌دهنده

* ساخته شده توسط **[نام شما](https://github.com/your-username)** 💻
* اگر این پروژه براتون مفید بود ⭐️ یادتون نره!

---

## 📜 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.
