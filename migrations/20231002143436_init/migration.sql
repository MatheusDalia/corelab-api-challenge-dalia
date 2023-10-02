-- CreateTable
CREATE TABLE "Todo" (
    "todo_id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "color" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("todo_id")
);
