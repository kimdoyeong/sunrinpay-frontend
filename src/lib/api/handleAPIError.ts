function handleAPIError(e: any) {
  if (e.response && e.response.data.message) {
    throw new Error(`[${e.response.status}] ` + e.response.data.message);
  }
  throw new Error(e.message);
}

export default handleAPIError;
