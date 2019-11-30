import React from "react";
import SEO from "../../components/SEO";
import Container from "../../components/Layout/Container";
import DashboardWelcome from "../../components/Page/DashBoard";
import RedirectIfNotLogined from "../../components/special/RedirectIfNotLogined";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import AdminDashboardTap from "../../components/Page/AdminDashBoard/Tab";
import StoreDashboard from "../../components/Page/StoreDashboard";
export default function() {
  const { user, token } = useSelector((state: RootState) => ({
    user: state.Auth.user.user,
    token: state.Auth.token
  }));
  if (token.userType === "STORE") {
    return (
      <Container>
        <SEO title="대시보드" />
        <StoreDashboard />
      </Container>
    );
  }
  if (!user || !user.permission) return null;

  const isAdmin = user.permission.filter((p: any) => p === "admin").length > 0;

  return (
    <Container>
      <SEO title="대시보드" />
      <RedirectIfNotLogined />
      <h1>대시보드</h1>
      <div>{isAdmin ? <AdminDashboardTap /> : <DashboardWelcome />}</div>
    </Container>
  );
}
