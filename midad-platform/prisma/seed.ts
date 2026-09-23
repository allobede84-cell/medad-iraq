const roles = [
  "visitor",
  "registered_user",
  "volunteer",
  "editor",
  "moderator",
  "administrator",
  "super_administrator",
];

const permissions = [
  "users.read",
  "users.write",
  "initiatives.read",
  "initiatives.write",
  "events.read",
  "events.write",
  "articles.read",
  "articles.write",
  "media.read",
  "media.write",
];

const seedData = {
  roles,
  permissions,
  admin: {
    email: "admin@midad.org",
    passwordHash: "demo-hash-change-me",
    firstName: "MIDAD",
    lastName: "Admin",
    role: "super_administrator",
  },
  settings: [{ key: "site_name", value: "مِداد" }],
};

console.log("Seed data prepared for the MIDAD platform:", JSON.stringify(seedData, null, 2));
