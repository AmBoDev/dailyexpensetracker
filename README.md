💰 Daily Expense Tracker

A Django-based web application to track daily expenses, manage categories, and analyze spending patterns using SQLite as the database.

📌 Features

➕ Add, edit, and delete expenses

📊 View daily, weekly, and monthly expense summaries

🗂️ Categorize expenses (Food, Transport, Shopping, etc.)

🔍 Search and filter transactions

👤 User authentication (Sign up, Login, Logout)

📈 Simple reports & insights

🛠️ Tech Stack

Backend: Django (Python)

Database: SQLite

Frontend: Django Templates (HTML, CSS, Bootstrap)

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/daily-expense-tracker.git
cd daily-expense-tracker

2️⃣ Create a Virtual Environment & Activate
python -m venv venv
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

3️⃣ Install Dependencies
pip install -r requirements.txt

4️⃣ Apply Migrations
python manage.py migrate

5️⃣ Create a Superuser (for admin access)
python manage.py createsuperuser

6️⃣ Run the Development Server
python manage.py runserver

7️⃣ Open the App

Visit: http://127.0.0.1:8000/

📸 Screenshots

(Add screenshots here — e.g., Login page, Dashboard, Expense list, Charts)

🚀 Future Enhancements

Export expenses to CSV/PDF

Add income tracking

Add budget & savings goals

Graphs & analytics dashboard

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📜 License

This project is licensed under the MIT License - see the LICENSE
 file for details.
