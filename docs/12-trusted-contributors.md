# Trusted contributors (optional)

By default, anyone who can open the map can also use the *"+ Add a
tree"* button. For most park Friends groups this is fine — a stray
spam entry is easy to delete from the spreadsheet.

If you'd rather only let a small group of volunteers add trees, you
can switch on **trusted-contributor mode**. The map then hides the
*"+ Add a tree"* button from visitors and only shows it to devices
you've enrolled.

> ⚠️ **Important to know**
> - It's a shared password, not real identity. Anyone you enrol could
>   pass the magic link on to someone else.
> - Once a photo or row is added to your map, deleting it from the
>   spreadsheet removes it from the map — but the photo file itself
>   stays in your GitHub repository's history. For genuinely offensive
>   content, the only complete cleanup is to delete the whole
>   repository. Worth thinking about before you decide whether to
>   leave the map fully open or to gate it.

## Setting it up (about 5 minutes)

You'll do three things:

1. Pick a secret password.
2. Add it to your Apps Script's settings.
3. Switch on the gate in `config.js`.

### 1. Pick a secret password

Any string will do. Make it memorable but hard to guess. Examples:

- `friends-2026-acorn`
- `lillie-park-treemap-2026`
- `volunteer-9w7s2`

> Don't use a password you use anywhere else. If it ever leaks, you can
> rotate it instantly (see *"If the password leaks"* below).

### 2. Add it to Apps Script

1. Open your Apps Script project (script.google.com → your project).
2. Click the **gear icon** (Project Settings) in the left sidebar.
3. Scroll to **Script Properties** → **Edit script properties**.
4. Add one property:

   | Property             | Value                  |
   |----------------------|------------------------|
   | `CONTRIBUTOR_TOKEN`  | Your secret password.  |

5. **Save script properties**.

You **don't need to redeploy** the Apps Script — script properties take
effect instantly.

### 3. Switch on the gate in `config.js`

1. Open your repository on GitHub.
2. Click **`config.js`** → pencil icon to edit.
3. Find this line near the bottom:

   ```js
   const ENABLE_CONTRIBUTOR_GATE = false;
   ```

4. Change `false` to `true`:

   ```js
   const ENABLE_CONTRIBUTOR_GATE = true;
   ```

5. Scroll down, commit message *"Turn on contributor gating"*, click
   **Commit changes**. GitHub Pages will rebuild in ~30 seconds.

That's it — the *"+ Add a tree"* button is now hidden from everyone,
including you. The next section explains how to enrol yourself and
your volunteers.

## Enrolling devices

To unlock the *"+ Add a tree"* button on a device, that device needs
to visit a special **magic link** once:

```
https://your-map.com/?enrol=YOUR-SECRET-PASSWORD
```

For example, if your map is at `https://my-park-trees.example.com/`
and your password is `friends-2026-acorn`, the magic link is:

```
https://my-park-trees.example.com/?enrol=friends-2026-acorn
```

When a volunteer opens the link:

1. The map loads as normal.
2. Behind the scenes, the password is saved to that device's browser.
3. The password is stripped from the address bar (so it won't appear
   if they bookmark the page).
4. The *"+ Add a tree"* button is now visible to them.

**Each device must enrol separately** — visiting the magic link on your
phone doesn't enrol your laptop. This is intentional: only the devices
you explicitly enrolled can add trees.

> 💡 If a volunteer clears their browser data (or uses Private /
> Incognito mode), they'll need to visit the magic link again.

## Sharing the magic link safely

The magic link **is your password** — anyone who has it can enrol any
device. Share it carefully:

✅ **Good** — one-to-one private channels:
- Email (to a specific person)
- WhatsApp (to a specific person or a small private group)
- Hand them the link in person

❌ **Don't** post the magic link anywhere a non-volunteer could see it:
- On your Friends group's public Facebook page
- On your group's website
- In a public newsletter
- On a shared notice board

## If the password leaks

If the magic link ends up somewhere public, rotate the password
straight away:

1. In Apps Script → Project Settings → Script Properties, change
   `CONTRIBUTOR_TOKEN` to a new value.
2. **Save script properties**.

The moment you save, the old password stops working — anyone who had
the old magic link can't add trees any more. Send the new magic link
to your volunteers and ask them to visit it once on each of their
devices.

## Turning the gate back off

If you change your mind and want the map to be fully open again:

1. In `config.js`, change `ENABLE_CONTRIBUTOR_GATE` back to `false`.
2. Commit and push.

You can also (optionally) delete the `CONTRIBUTOR_TOKEN` script
property in Apps Script. With the gate off and no token set, behaviour
is back to fully open mode.
