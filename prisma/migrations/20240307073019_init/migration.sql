/*
  Warnings:

  - You are about to drop the column `date` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "date",
DROP COLUMN "time",
ADD COLUMN     "dateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
