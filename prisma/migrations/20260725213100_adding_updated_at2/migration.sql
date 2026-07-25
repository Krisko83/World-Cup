/*
  Warnings:

  - Made the column `createdAt` on table `matches` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "matches" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "createdAt" SET NOT NULL;
