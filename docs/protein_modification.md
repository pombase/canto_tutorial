---
hide:
  - toc
---

To create a protein modification annotation, on the `Quick Links` list, click on `Protein modification` to open a window that requires you to indicate:

* **Gene**: gene of which the protein is modified. See [how to add genes](./genotype_management.md#adding-genes-info)
* **Term name**: a term from the MOD ontology to represent the modification. Some can be tricky to find, see [below](#modifications-that-are-tricky-to-find).
* **Annotation extensions**: available once a term is selected. Most are self-explaining, but some clarifications:
    * Extensions that contain `during`, allow you to specify:
        * A cell cycle phase (e.g. `removed during` anaphase)
        * A cellular response to a stress (e.g. `present during` cellular response to heat)
    * Extensions that contain `in presence of` allow to add a chemical, drug or metabolite (e.g. galactose or hydroxyurea).
    * Extension `in absence of` allows you to indicate that the modification is exist when a certain gene is missing (e.g. deletion of gene X leads to the phosphorylation of protein Y).
    * For proteins that modify themselves, use `added by` with the same gene as the `Gene` field of the modification.
    * You can use `position modified` to indicate the affected residue or residues (comma-separated).
* **Evidence code**: can only be `Inferred from Direct Assay`.
* **Comment**: it's very useful for us if you indicate the figure or table where this interaction comes from.

### Modifications that are tricky to find

* **Phosphorylation:**  below the term names and their MOD codes, which can be used in the `Term name` field.
    * Serine:    O-phospho-L-serine (MOD:00046)
    * Threonine: O-phospho-L-threonine (MOD:00047)
    * Tyrosine:  O4'-phospho-L-tyrosine (MOD:00048)
* **Methylation:** there are many terms, we recommend starting from "methylated residue" (MOD:00427), and iterate towards more specific terms.
* **Glycosilation:** there are more specific terms, but "N-glycosylated residue" (MOD:00006) or "O-glycosylated residue" (MOD:00396) are often sufficient.

