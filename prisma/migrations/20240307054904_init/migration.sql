-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "time" TIME NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
