const apiUrl = "https://api.priv8area.com/aktuel/index.php";
export const api = async (path) => {
  const request = await fetch(`${apiUrl}${path}`);
  return await request.json();
};

const getDashboardData = () => {
  return api("/getDashboard");
};
const getMarketsDetail = (id) => {
  return api(`/getMarket/${id}`);
};
const getProductDetail = (id) => {
  return api(`/category_detail/${id}`);
};

export { getDashboardData, getMarketsDetail, getProductDetail };
