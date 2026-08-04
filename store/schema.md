# Marketplace Copy Schema

Each localized store copy source should contain the following sections.

```markdown
# <Locale Display Name>

## Short Description

<One concise localized sentence.>

## Long Description

<Browser-neutral localized long description.>

## Reviewer Note

<Localized or English reviewer note, depending on store requirements.>

## Store-Specific Notes

- Chrome Web Store: <optional wrapper or reviewer instruction>
- Microsoft Edge Add-ons: <optional wrapper or reviewer instruction>
```

Normalized JSON generated from these sources should use this shape:

```json
{
  "en": {
    "shortDescription": "...",
    "longDescription": "...",
    "reviewerNote": "...",
    "storeNotes": {
      "chromeWebStore": "...",
      "edgeAddOns": "..."
    }
  }
}
```

## Field Requirements

- `shortDescription` must be concise and must not contain a dense feature list.
- `longDescription` must explain workflow, use cases, output, privacy, and setup expectations without keyword stuffing.
- `reviewerNote` should explain permissions and local processing when useful.
- `storeNotes` may name individual marketplaces; the reusable long description should not.