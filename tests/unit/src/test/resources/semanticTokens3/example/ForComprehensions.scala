<<package>>/*keyword*/ <<example>>/*namespace*/

<<class>>/*keyword*/ <<ForComprehensions>>/*class*/ {
  <<for>>/*keyword*/ {
    <<a>>/*parameter,declaration*/ <<<->>/*operator*/ <<List>>/*variable,readonly*/(<<1>>/*number*/)
    <<b>>/*parameter,declaration*/ <<<->>/*operator*/ <<List>>/*variable,readonly*/(<<a>>/*parameter*/)
    <<if>>/*keyword*/ (
      <<a>>/*parameter*/,
      <<b>>/*parameter*/,
    ) <<==>>/*method*/ (<<1>>/*number*/, <<2>>/*number*/)
    (
      <<c>>/*variable,declaration,readonly*/,
      <<d>>/*variable,declaration,readonly*/,
    ) <<<->>/*operator*/ <<List>>/*variable,readonly*/((<<a>>/*parameter*/, <<b>>/*parameter*/))
    <<if>>/*keyword*/ (
      <<a>>/*parameter*/,
      <<b>>/*parameter*/,
      <<c>>/*variable,readonly*/,
      <<d>>/*variable,readonly*/,
    ) <<==>>/*method*/ (<<1>>/*number*/, <<2>>/*number*/, <<3>>/*number*/, <<4>>/*number*/)
    <<e>>/*variable,declaration,readonly*/ = (
      <<a>>/*parameter*/,
      <<b>>/*parameter*/,
      <<c>>/*variable,readonly*/,
      <<d>>/*variable,readonly*/,
    )
    <<if>>/*keyword*/ <<e>>/*variable,readonly*/ <<==>>/*method*/ (<<1>>/*number*/, <<2>>/*number*/, <<3>>/*number*/, <<4>>/*number*/)
    <<f>>/*parameter,declaration*/ <<<->>/*operator*/ <<List>>/*variable,readonly*/(<<e>>/*variable,readonly*/)
  } <<yield>>/*keyword*/ {
    (
      <<a>>/*parameter*/,
      <<b>>/*parameter*/,
      <<c>>/*variable,readonly*/,
      <<d>>/*variable,readonly*/,
      <<e>>/*variable,readonly*/,
      <<f>>/*parameter*/,
    )
  }

}