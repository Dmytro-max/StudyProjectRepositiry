/*
  Warnings:

  - You are about to drop the column `available` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "available",
DROP COLUMN "price";
