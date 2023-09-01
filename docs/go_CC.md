---
hide:
  - toc
---

??? warning "Before you make a GO annotation"

    * Gene Ontology (GO) annotations are used to describe the normal (wild type) functions, processes and cellular components or locations of a gene product (protein or RNA).
    * **Cellular components** represent subcellular structures and macromolecular complexes, such as nucleus, nuclear inner membrane, nuclear pore, and proteasome complex.
    * Generally, a gene product is located in or is a subcomponent of a particular cellular component.
    * Gene products may be annotated with multiple cellular component terms.


## Video summary

<div class="video-sizer">
    <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/KY7ev8IEG00" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

On the `Quick Links` list, click on `GO cellular component` to open a window that requires you to indicate:

* **Gene:** the gene that is located in a cellular component. See [how to add genes](./genotype_management.md#adding-genes-info).
* **Term name:** a GO term describing the cellular component.
    * Start typing a cellular component in the search box. If you do not find the precise component you are looking for, choose a broad term (e.g. cytoskeleton, mitochondrion) that can be refined later.
    * Click the chosen term, and verify that the displayed definition describes the phenotype you want to annotate. There is sometimes a "Comment" section with extra tips for annotation.
    * If the blue button reads `Next`, click it and see if you can find a more specific term that the one you originally selected. If so, select it and do as before.
    * Otherwise, click `Finish`.
    * If you do not find the term you require, select a broader term, and request a new one clicking on `Suggest a new term` on the right side of the text box.
* **Annotation extension:** this field appears once you have selected a GO term. Always click the `Add` button to see if you can specify:
    * **Links to biological processes:** `observed in this location during` can be used to indicate that gene product localizes to the cellular component during a cell cycle phase or cellular response to stimulus. For example, med7 localizes to euchromatin during "mitotic M phase".
    * **Links to sequence ontology terms**: `found at genomic region` indicates the type of DNA region for terms describing chromatin or chromosome regions. For example, man1 locates to the cellular component "heterochromatin" at "long terminal repeat" genomic regions.
    * **Links to genes:** similarly, `found at genomic region` can also specify the genes within the cellular component. For example, epe1 localizes to heterochromatin at the swi6 gene.
    * **Modified form:** sometimes, only a certain modified form of the gene product (e.g. phosphorylated) localizes in the cellular component. This is very valuable information, but requires a PR ontology term to exist for the modified version of the protein, which is rare. You can include this information in the comment section (e.g. write: "phosphorylated form").
* **Evidence code:** the type of experiment where the phenotype was observed.
* **Comment:** it's very useful for us if you indicate the figure or table where this phenotype comes from.
