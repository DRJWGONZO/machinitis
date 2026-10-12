// Every file in this folder is an entry: it gets the entry layout
// and lives at machinitis.com/<file-name-without-the-date>/
export default {
  layout: "entry.njk",
  permalink: (data) => `/${data.page.fileSlug}/`,
};
