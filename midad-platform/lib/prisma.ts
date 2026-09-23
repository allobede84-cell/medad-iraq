export async function checkDatabaseStatus() {
  if (!process.env.DATABASE_URL) {
    return {
      ready: false,
      message: "لم يتم تكوين DATABASE_URL بعد",
      errorCode: "DATABASE_NOT_CONFIGURED",
    };
  }

  return {
    ready: true,
    message: "قاعدة البيانات جاهزة للاتصال عند تهيئتها فعليًا",
    errorCode: null,
  };
}
