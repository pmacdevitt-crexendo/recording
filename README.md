# Recording Button

A tiny NetSapiens Flow remote that adds a "Recording" button to the table
toolbar on the Call Logs page. Clicking it currently shows a placeholder
message; change the `onClick` in `src/App.tsx` to make it do real work.

## Deploy (same steps as Smiley Faces)

1. Push these files to a public GitHub repo, at the top level (not in a subfolder),
   including `.github/workflows/deploy.yml`.
2. Settings → Pages → Source: GitHub Actions. Wait for the green check.
3. Your bundle: `https://<user>.github.io/<repo>/remoteEntry.js`
4. Platform → UI SDK Management → Registered Apps → Add App, with
   `webpack_module: recordingButton` and that URL. Then click Deploy.

Bump `version` in `package.json` before every push after the first deploy.
