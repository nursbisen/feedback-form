const exportJson = (jsonData: Record<string, any>, fileName: string) => {
  const fileExtension = '.json';
  const json = JSON.stringify(jsonData, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const href = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = href;
  link.download = fileName + fileExtension;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(href);
};

export default exportJson;