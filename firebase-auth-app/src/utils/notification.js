export const requestPermission = async () => {
  if (Notification.permission !== "granted") {
    await Notification.requestPermission();
  }
};

export const showNotification = (patientName) => {
  if (Notification.permission === "granted") {
    new Notification("Patient Added ✅", {
      body: `${patientName} added successfully`,
    });
  }
};