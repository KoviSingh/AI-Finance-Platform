/*
  Warnings:

  - You are about to drop the column `lastAlertSend` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the column `reciptUrl` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `recuuringInterval` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `ClerkUserId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `budgets` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clerkUserId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `category` on table `transactions` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `clerkUserId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_ClerkUserId_key";

-- AlterTable
ALTER TABLE "budgets" DROP COLUMN "lastAlertSend",
ADD COLUMN     "lastAlertSent" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "reciptUrl",
DROP COLUMN "recuuringInterval",
ADD COLUMN     "receiptUrl" TEXT,
ADD COLUMN     "recurringInterval" "RecurringInterval",
ALTER COLUMN "category" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "ClerkUserId",
ADD COLUMN     "clerkUserId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "budgets_userId_key" ON "budgets"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_clerkUserId_key" ON "users"("clerkUserId");
