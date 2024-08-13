// firebaseConfig.js
const firebaseConfig = {
    apiKey: '<API_KEY>',
    authDomain: '<AUTH_DOMAIN>',
    databaseURL: 'https://nccaa-af8c8-default-rtdb.firebaseio.com',
    projectId: 'nccaa-af8c8',
    storageBucket: '<STORAGE_BUCKET>',
    messagingSenderId: '<MESSAGING_SENDER_ID>',
    appId: '<APP_ID>',
    serviceAccount: {
      type: 'service_account',
      project_id: 'nccaa-af8c8',
      private_key_id: '84ddea1362a5655634327674a7faf382cdda1ad6',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCDbcht0N7J1D86\nlMUaCgZYZmrTkF/WOHkKBV+U6aFhToSDXz6JjnL9R4LsvvVQ4ynSeK/0OUEhbk92\nRfpyn4zvg1PHK/NHyHIe3M7tjNlE8p2QV1uWKRBRwuPmj7pGo/2knH+oELxt9gJl\nxyciwd0l74eFKUa6XlsRd8aj6J0Z7vF1P4dMUYWxF5+kiG9C2Z3umYNMnhNbJJND\nXH/q+UZs+X8Tle6onECjLyLzzUIDDnA+r86+22vND1p/evInanxtzDKVKwGLTnCu\n1ww32LparxJWVbLtOTdqLcxF9FxGgkfQNDPfj2Yejbxjnmd+e39Jvw/DKQNhb9Nr\nIzED7YYVAgMBAAECggEAAlUnUAT7gfMxlhgVhs3zvouUIiIiA/rSRyJrnQh9KULL\n/krpS2a1qsIjVDwFaESdNZOXx+ALmbd2qJTltOAZD8KHG6CvkNrBZRkqgQkqwrBY\nVJCrBaIVRzuMG5z5w47d4xc1+s/P5axj7tYsic+NXcLVEcDMSmV/UfLhbypN6NZl\nfBDZotQkO1iiHrPjOUdc0oVzmrTkALxI70Lok40X5W+gKp5vu4GVcx/DJZJasKct\nyhOcrK7XwHEIrgyvoFDqLNS8CIOMo0EAAIyy5FRiKfetslpiC2bzNCE5wS86OiwD\nDKz4/waG2NPWCq+dV/RrR9xIlwTWgMZEWjXlvvoghwKBgQC5j7O6dFE2oJ3PkSel\ns65bZR/zNQcs53kbgodwJ8rKqY2OsF6ejD6P96gyWoHxbOyhD9k9SMKpgqNnqEl1\nCBeOQ8avUpcZrFQeReNf4dubogOh17pwJYOhhiJpE4p0zN/g/mlK0mZbj1jt9LnL\n9ZPMPIuafWXN41+mX09FwzpWBwKBgQC1UaVlZjpAk+9rybhTVb5UkrtOGqKXmHip\nxs8npqSJOBBcB9Hie4V/zR4Laa5xooXHbHKz4IF/uYDwuzwf10XDfHb2M6q5leop\nkpPpJcPvXJjhECQa9GN4Fn9AxdcpOwDOxStYRSGWF1PeIMODrTLYOMOzWCflD9lr\nVhborQxcAwKBgA0MxyYIwiFmYFLVsYUcwtlYnkubYhrNWJ4Pqvi/Q6rHC9aKHs1l\nrYywbRrFdLgG4gldtPhzYoVLU7SZiDj7zbRKnfF8jH