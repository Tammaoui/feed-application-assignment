## Get started

## Frontend

- Navigate to ./feedapp/frontend
1. Install the required modules `npm install`
2. Run the following command: `npm run dev`

## Backend
- Navigate to ./feedapp
1. Run `python manage.py runserver`

## Working locally:
- Make sure to update manage.py to point to feedapp.dev instead of settings:
`os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'feedapp.dev')
`

## Before pushing to master:
- Make sure update manage.py to point to settings.py
`os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'feedapp.settings')`

## Packages
Not all packages in requirements.txt are required. These are mainly for release version and are not needed for local development.
For local development, only django is needed.