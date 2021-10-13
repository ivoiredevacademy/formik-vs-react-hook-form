import React from "react";
import AppLayout from "./components/layouts/AppLayout";
import BaseForm from "./components/forms/BaseForm";
import FormikForm from "./components/forms/FormikForm";

function App() {
  return (
      <AppLayout>
        <FormikForm />
      </AppLayout>
  );
}

export default App;
