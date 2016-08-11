/* Copyright (c) 2013-2015 Richard Rodger, MIT License */
"use strict";

if( typeof sgen === 'undefined' ) {
  var sgen = require('..')
}

describe('sgen', function() {
  var s = sgen();
  it('Create', function() {
    var str = s.create();
    expect( s.verify(str) ).toBe( true );
  });
  it('Verify with dashes', function() {
    expect( s.verify('123-456-781') ).toBe( true );
    expect( s.verify('123-456-789') ).toBe( false );
  });
  it('Verify without dashes', function() {
    expect( s.verify('123456781') ).toBe( true );
    expect( s.verify('123456789') ).toBe( false );
  });
  it('Format with dashes', function () {
    expect( '123-456-781' ).toBe( s.fmt('123456781') );
  });
  it('Checking checksum', function () {
    expect( '204008830' ).toBe( '20400883' + s.checksum('20400883') );
  });
  it('Format with SLRN text', function () {
    expect( 'SLRN 204-008-830' ).toBe( s.fmtw('204008830') );
  });
  it('Prefix with SLRN', function () {
    expect( '2672204008830' ).toBe( s.prefix() + '204008830' );
  });
  it('Deformat a SLRN', function () {
    expect( '204008830' ).toBe( s.defmt('204-008-830') );
  });
  it('noConflict', function() {
    var g = sgen().noConflict();
    expect( '123-456-781' ).toBe( g.fmt('123456781') ) ;
  });
});
