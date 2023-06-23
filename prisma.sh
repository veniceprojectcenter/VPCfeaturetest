echo input name of migration

read -r name

npx prisma migrate dev --name "$name"

npx prisma db push